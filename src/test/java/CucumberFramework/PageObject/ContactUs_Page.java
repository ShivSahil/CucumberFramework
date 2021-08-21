package CucumberFramework.PageObject;


import java.io.IOException;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import CucumberFramework.BaseClass.BaseClass;
import cucumber.api.DataTable;

public class ContactUs_Page extends BaseClass{

	By textfield_FirstName= By.xpath("//input[@name='first_name']");
	By textfield_LastName= By.xpath("//input[@name='last_name']");
	By textfield_EmailAddress= By.xpath("//input[@name='email']");
	By textfield_Message= By.xpath("//textarea[@name='message']");
	By button_Submit= By.xpath("//input[@value='SUBMIT']");

	public ContactUs_Page getContactUsPage() throws IOException {
		driver.get("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
		return new ContactUs_Page();
	}
	
	public ContactUs_Page enterFirstName(String firstName) throws Exception {
		type(textfield_FirstName, firstName);
		return new ContactUs_Page();
	}
	
	public ContactUs_Page enterLasttName(String lastName) throws Exception {
		type(textfield_LastName, lastName);
		return new ContactUs_Page();
	}
	
	public ContactUs_Page enterEmailAddress(String emailAddress) throws Exception {
		
		type(textfield_EmailAddress, emailAddress);
		return new ContactUs_Page();
	}
	
	public ContactUs_Page enterComments(DataTable dataTable, int row, int column) throws Exception {
		List<List<String>> data = dataTable.raw();
		type(textfield_Message, data.get(row).get(column));
		return new ContactUs_Page();
	}
	
	public ContactUs_Page clickOnSubmiButton() throws Exception {
		click(button_Submit);
		return new ContactUs_Page();
	}
	
	public ContactUs_Page confirmContactUsFormSubmissionWasSuccessful() throws Exception {
		WebElement thanksContactUsPage = driver.findElement(By.xpath(".//*[@id='contact_reply']/h1"));
		
				
		Assert.assertEquals("Thank You for your Message!", thanksContactUsPage.getText()  );		
		return new ContactUs_Page();
	}

}
