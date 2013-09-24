/* CSS2XPATH v0.4
 * ---
 * this script is based on the work of James Padolsey
 * ---
 */
 
function CSS2XPATH(selector) {
    selector = ' ' + selector;
    /* The order in which items are replaced is IMPORTANT! */
    var regex = [
            /* All blocks of 2 or more spaces */
            [/\s{2,}/g, function(){
                return ' ';
            }],
            /* additional selectors (comma seperated) */
            [/\s*,\s*/g, function(){
                return '|//';
            }],
            /* Attribute selectors */
            [/[\s\/]?\[([^\]]+)\]/g, function(m,kv){
                return (m.substr(0,1).match(/[\s\/]/) ? '*' : '') + '[@' + kv + ']';
            }],
            /* :nth-child(n) */
            [/:nth-child\((\d+)\)/g, function(m,n){
                return '[' + n + ']';
            }],
            /* :last-child */
            [/:last-child/g, function(m,n){
                return '[last()]';
            }],
            /* :first-child */
            [/:first-child/g, function(m,n){
                return '[1]';
            }],
            /* "sibling" selectors */
            [/\s*\+\s*([^\s]+?)/g, function(m, sib){
                return '/following-sibling::' + sib + '[1]';
            }],
            /* "child" selectors */
            [/\s*>\s*/g, function(){
                return '/';
            }],
            /* Remaining Spaces */
            [/\s/g, function(){
                return '//';
            }],
            /* #id */
            [/([a-z0-9]?)#([a-z][-a-z0-9_]+)/ig, function(m,pre,id){
                return pre + (m.match(/^[a-z0-9]/)?'':'*') + '[@id=\'' + id + '\']';
            }],
            /* .className */
            [/([a-z0-9]?)\.([a-z][-a-z0-9]+)/ig, function(m,pre,cls){
                return pre + (m.match(/^[a-z0-9]/)?'':'*') + '[contains(concat(\' \',@class,\' \'),\' ' + cls + ' \')]';
            }]
        ],
        len = regex.length;
    for (var i = 0; i < len; i++) {
        selector = selector.replace(regex[i][0], regex[i][1]);
    }
    return selector.match(/^\/\//) ? selector : '//' + selector;
}
