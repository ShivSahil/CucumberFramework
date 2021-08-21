package CucumberFramework.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)

@CucumberOptions(

	features={"src/test/java/CucumberFramework/featureFiles/"}, // location of feature files
	
	glue={"CucumberFramework.steps"}, //location of step file
	
	monochrome = true, // if set to false, it give addition characters in console which is NOT very readable
	tags = {"@shivsahil"},  // run all feature files
	
	plugin = {"pretty", "html:target/cucumber",
			"json:target/cucumber.json", 
			"com.cucumber.listener.ExtentCucumberFormatter:target/report.html" } 
	// these all are location of the reports generated 
	// we need a cleaner report aka pretty 
	
	)

public class MainRunner extends AbstractTestNGCucumberTests{ // class should be in different place as that of @CucumberOptions
}
