class AngularHomePage{
    constructor(){
        this.searchTextBox = element(by.model('yourName'));
        this.greeting = element(by.binding('yourName'))
        this.backToTopBtn=element(by.xpath("//a[text()='Back to top']"))
        this.learn=element(by.xpath("//a[text()='Learn']"))
        this.tutorial=element(by.xpath("//li/a[text()='Tutorial']"))
        this.develop=element(by.xpath("//a[text()='Develop']"))
        this.developerGuide=element(by.xpath("//li/a[text()='Developer Guide']"))
    }
}

//export default AngularHomePage;
 module.exports = AngularHomePage;