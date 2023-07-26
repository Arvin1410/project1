package com.thinkcore.thinkcoretrainingproject;

import com.accelq.common.library.annotations.Command;
import com.accelq.common.library.annotations.Parameter;
import com.accelq.common.library.annotations.UserLibrary;
import com.accelq.core.SingletonInstancesRepo;
import java.io.File;
import java.io.FileOutputStream;
// import java.io.IOException;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
// import org.apache.poi.xssf.usermodel.XSSFWorkbook;
// import org.apache.poi.ss.usermodel.Workbook;

/**
 *
 * @author Ajoe
 */
@UserLibrary()
public class ArvinPdf {

	@Command(displayName = "Create New Pdf file arvin", templateStr = "Create New pdf file at path arvin <param1>", description = "Creates new pdf file at given location", deprecated = false, isVerification = false)

	public void createExcelFile(@Parameter(name = "filepath", description = "file path") String filepath) {
		filepath = SingletonInstancesRepo.getAqFileUtils().getAbsolutePath(filepath.trim());

		try {
			PDDocument pdfdoc = new PDDocument();
			pdfdoc.addPage(new PDPage());

			// path where the PDF file will be store
			pdfdoc.save(filepath);
			SingletonInstancesRepo.getAqLogUtils().info_("Created pdf file at location: '" + filepath + "successful");

			// prints the message if the PDF is created successfully
			// System.out.println("PDF created");
			// closes the document
			pdfdoc.close();
		} catch (Exception e) {
			SingletonInstancesRepo.getAqLogUtils()
					.error("Error occurred while creating an excel file at path: " + filepath);
			e.printStackTrace();
		} finally {

		}
	}

}
