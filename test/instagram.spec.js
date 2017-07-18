var expect = require('chai').expect;

beforeEach(function () {
    browser.url('/');
});

describe('Calendar page', function () {
    it('should be up and running', function() {
        var url = browser.getUrl();
        // /html/body/section/div/section/article/figure[10]/table/tbody/tr/td[2]/pre/div[2]/span[2]
        // expect(url).to.be.equal('http://ec2-35-158-14-71.eu-central-1.compute.amazonaws.com:8000/');
        // 
        expect(browser.isExisting('//*[@id="react-root"]/section/main/article/div[2]/div[1]/h1')).to.be.true;
        browser.waitForVisible('//*[@id="react-root"]/section/main/article/div[2]/div[2]/p/a');
        expect(browser.isExisting('//*[@id="react-root"]/section/main/article/div[2]/div[2]/p/a')).to.be.true;
        browser.element('//*[@id="react-root"]/section/main/article/div[2]/div[2]/p/a').click();
        browser.waitForVisible('//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[1]/input');
        expect(browser.element('//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[1]/input').getValue()).to.be.empty;
        browser.setValue('//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[1]/input', 'legende_narodne_muzike');
        expect(browser.element('//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[2]/input').getValue()).to.be.empty;
        browser.setValue('//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[2]/input', 'Partizanesku42');
        browser.element('//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/span/button').click();
        // browser.waitForVisible('//*[@id="react-root"]/section/nav/div[2]/div/div/div[2]/div/div/span[2]');       
        browser.waitForVisible('//*[@id="react-root"]/section/nav/div[2]/div/div/div[3]/div/div[3]/a');
        browser.element('//*[@id="react-root"]/section/nav/div[2]/div/div/div[3]/div/div[3]/a').click();
        browser.waitForVisible('//*[@id="react-root"]/section/main/article/header/div[2]/ul/li[3]/a/span');
        browser.element('//*[@id="react-root"]/section/main/article/header/div[2]/ul/li[3]/a/span').click();
        browser.waitForVisible('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/ul/li[1]/div/div[1]/div/div[1]/a');
        
        // var a = browser.element('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/ul/li[1]/div/div[1]/div/div[1]/a').getText();
        // alert(a);

        // browser.element('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/ul/li[103]/div/div[1]/div/div[1]/a').scroll();
        // browser.waitForVisible('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/ul/li[103]/div/div[1]/div/div[1]/a');
        // browser.element('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]').scroll('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/ul/li[30]/div/div[1]/div/div[1]/a');
        browser.scroll(0, 250);
        browser.element('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/ul/li[30]/div/div[1]/div/div[1]/a').scroll();
        //browser.waitForVisible('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/ul/li[10]/div/div[1]/div/div[1]/a');
        browser.waitForVisible('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/ul/li[100]/div/div[1]/div/div[1]/a', 5000);
    });

    // it('should have a title', function() {
    //     expect(browser.getTitle()).to.be.equal('Smart date calculator');
    // });

    // it('should have all required elements', function() {
    //     expect(browser.isExisting('#dp')).to.be.true;
    //     expect(browser.isExisting('.datepickershow')).to.be.true;
    //     expect(browser.element('button').getText()).to.be.equal('Calculate the following date');
    //     expect(browser.isExisting('#l')).to.be.true;
    // });

    // it ('should have input fields that are empty initially', function() {
    //     expect(browser.element('#dp').getValue()).to.be.empty;
    //     expect(browser.element('#l').getText()).to.be.empty;
    //     expect(browser.isExisting('.datepickerdropdown')).to.be.false;
    // });

    // it('should show/hide calendar on a click', function() {
    //     expect(browser.isExisting('.datepickerdropdown')).to.be.false;
    //     browser.element('.datepickershow').click();
    //     expect(browser.isExisting('.datepickerdropdown')).to.be.true;
    //     browser.element('.datepickershow').click();
    //     expect(browser.isExisting('.datepickerdropdown')).to.be.false;
    // });

    // it('should clear inputs after browser refresh', function() {
    //     browser.setValue('#dp', 'testvalue1');
    //     expect(browser.element('#dp').getValue()).to.be.equal('testvalue1');
    //     browser.refresh();
    //     expect(browser.element('#dp').getValue()).to.be.empty;
    // });

    // it('should show random selected date', function () {
    //     browser.element('.datepickershow').click();
    //     var rows = $$('.datepickerdropdown table tbody tr');
    //     var columns = rows[4].$$('td');
    //     var dateVal = columns[4].$('input').getAttribute('date');
    //     columns[4].$('input').click();
    //     expect(browser.element('#dp').getValue()).to.be.equal(dateVal);
    // });

    // it('should increment date on a button click', function () {
    //     var date1 = '14-Apr-2017';
    //     browser.setValue('#dp', date1);
    //     browser.element('button').click();
    //     expect(browser.element('#l').getText()).to.be.equal('15-4-2017');

    //     browser.refresh();

    //     var date2 = '28-Feb-2017';
    //     var incrementedDate2 = getIncrementedDate(date2);
    //     browser.setValue('#dp', date2);
    //     browser.element('button').click();
    //     expect(browser.element('#l').getText()).to.be.equal(incrementedDate2);

    //     browser.refresh();

    //     var date3 = '31-Dec-2017';
    //     var incrementedDate3 = getIncrementedDate(date3);
    //     browser.setValue('#dp', date3);
    //     browser.element('button').click();
    //     expect(browser.element('#l').getText()).to.be.equal(incrementedDate3);

    //     browser.refresh();

    //     var date4 = '30-Apr-2017';
    //     var incrementedDate4 = getIncrementedDate(date4);
    //     browser.setValue('#dp', date4);
    //     browser.element('button').click();
    //     expect(browser.element('#l').getText()).to.be.equal(incrementedDate4);
    // });
});