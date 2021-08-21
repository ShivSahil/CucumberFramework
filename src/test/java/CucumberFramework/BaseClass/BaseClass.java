package CucumberFramework.BaseClass;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import CucumberFramework.PageObject.ContactUs_Page;

public class BaseClass {
	
	public static WebDriver driver;
	public static ContactUs_Page contactUs_Page;
	
	public static void inititilize()
	{
		try {
		System.setProperty("webdriver.gecko.driver", "D:\\geckodriver.exe");
	    driver=new FirefoxDriver();	
	    driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
		}
		finally {
			contactUs_Page= new ContactUs_Page();
		}
		
	}
	
	
// some basic reusable methods
	
	
	public void click(By byEle)
	{
		driver.findElement(byEle).click();
	}


	public void type(By byEle, String text) {
		driver.findElement(byEle).sendKeys(text);;
	}
}
