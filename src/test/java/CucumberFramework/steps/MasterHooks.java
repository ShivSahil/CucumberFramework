package CucumberFramework.steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import CucumberFramework.BaseClass.BaseClass;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class MasterHooks extends BaseClass{

	
	@Before   // this is always executed before a scenario or scenario outline
	public void setUp()
	{
		  BaseClass.inititilize();
	}
	
	
	
	// this is always executed after a scenario or scenario outline
	@After
	public void tearDownAndFail(Scenario scenario) throws InterruptedException {
		
		
		if(driver != null && scenario.isFailed()) {   // checkout "scenario.isFailed()"
			scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES),"image/png");
			driver.manage().deleteAllCookies();
			driver.quit();
			driver = null;
			System.out.println("Scenario failed with name:- "
					+ scenario.getName());
			}
		
		
		if(driver != null ) // "isPassed()" doesn't exist
			{
			driver.manage().deleteAllCookies();
			driver.quit();
			driver = null;
			}
				
		} 	
		
		
	
	}

