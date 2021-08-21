
package CucumberFramework.steps;

import CucumberFramework.BaseClass.BaseClass;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactSteps extends BaseClass{
	
	
	
	// container-special-offers
	@And("^I enter a valid email address$")
	public void i_enter_a_valid_email_address() throws Exception  {
		contactUs_Page.enterEmailAddress("webdriveruniversity@outlook.com");
	}

	@Given("^I access webdriverUniversity contact us$")
	public void i_access_webdriverUniversity_contact_us()  {
		driver.get("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
	   
	}

	@When("^I enter a valid \"([^\"]*)\" firstname$")
	public void i_enter_a_valid_firstname(String fName) throws Exception  {
	   
		contactUs_Page.enterFirstName(fName);
		Thread.sleep(2000);
	}
	

	@And("^I enter a valid lastname as \"([^\"]*)\"$")
	public void i_enter_a_valid_lastname_as(String lName) throws Throwable {
	    
		contactUs_Page.enterLasttName(lName);
	}

	
	
	
	@And("^I enter comment$")    // new way to use Datatable & easiest way!!!
	
	public void i_enter_comment(DataTable dataTable) throws Exception  {
		
		// you might be thinking how am I using this datatable without use of List
		// open the enterComments method
		
		contactUs_Page.enterComments(dataTable, 0, 0);
		contactUs_Page.enterComments(dataTable, 0, 1);
		Thread.sleep(3000);
	
	}

	@When("^I click on submit button$")
	public void i_click_on_submit_button() throws Exception  {
		contactUs_Page.clickOnSubmiButton();
	   
	}

	
	
	// @Then needs to have assert!!!!!!!!!!
	
	@Then("^The information should successfully be submitted via contact us form$")
	public void the_information_should_successfully_be_submitted_via_contact_us_form() throws Exception  {
		contactUs_Page.confirmContactUsFormSubmissionWasSuccessful();
	   
	}
	
	


}
