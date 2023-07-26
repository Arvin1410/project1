package com.thinkcore.thinkcoretrainingproject;

import com.accelq.common.library.annotations.Command;
import com.accelq.common.library.annotations.Parameter;
import com.accelq.common.library.annotations.UserLibrary;
import com.accelq.core.SingletonInstancesRepo;
import java.io.File;
import java.io.FileOutputStream;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;

/**
 *
 * @author Ajoe
 */
@UserLibrary()
public class Excel {

	@Command(displayName = "Create New Excel file arvin", templateStr = "Create New Excel file at path arvin <param1>", description = "Creates new excel file at given location", deprecated = false, isVerification = false)

	public void createExcelFile(@Parameter(name = "filepath", description = "file path") String filepath) {
		filepath = SingletonInstancesRepo.getAqFileUtils().getAbsolutePath(filepath.trim());

		try {
			createExcelFile_(filepath);
			SingletonInstancesRepo.getAqLogUtils().info_("Created excel file at location: '" + filepath + "'.");
		} catch (Exception e) {
			SingletonInstancesRepo.getAqLogUtils().error("Error occurred while creating an excel file at path: "
					+ filepath + ". Error: " + e.getLocalizedMessage());
		}
	}

	public void createExcelFile_(String filepath) throws Exception {
		// filepath =SingletonInstancesRepo.getAqFileUtils().getAbsolutePath(filepath);
		filepath = filepath.trim();
		if (!filepath.endsWith(".xlsx")) {
			if (filepath.endsWith(".xls")) {
				filepath = filepath.replace(".xls", ".xlsx");
			} else {
				filepath = filepath + ".xlsx";
			}
		}

		Workbook workbook = new XSSFWorkbook();

		workbook.createSheet("sheet1");
		try (FileOutputStream out = new FileOutputStream(new File(filepath))) {
			workbook.write(out);
		} catch (Exception e) {
			throw e;
		} finally {
			workbook.close();
		}
	}

}