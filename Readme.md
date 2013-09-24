#css2xpath
========

this was created from css2xpath.js from dachev/Events repo


###Has been tested on the following selectors
CSS2XPATH('div a'); => //div//a  
CSS2XPATH('div#intro a.active'); => //div[@id='intro']//a[contains(concat(' ',@class,' '),' active ')]  
CSS2XPATH('#apple pear.lemon'); => //*[@id='apple']//pear[contains(concat(' ',@class,' '),' lemon ')]  
CSS2XPATH('ul.nav li:first-child a'); => //ul[contains(concat(' ',@class,' '),' nav ')]//li[1]//a  
CSS2XPATH('body > div > p:nth-child(3)'); => //body/div/p[3]  
CSS2XPATH('li > input[type="text"]'); => //li/input[@type="text"]  
