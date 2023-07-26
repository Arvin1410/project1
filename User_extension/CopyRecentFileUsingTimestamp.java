
package com.thinkcore.thinkcoretrainingproject;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.BasicFileAttributes;
import java.nio.file.attribute.FileTime;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import com.accelq.common.library.annotations.Command;
import com.accelq.common.library.annotations.Parameter;
import com.accelq.common.library.annotations.UserLibrary;
import com.accelq.core.SingletonInstancesRepo;
import com.accelq.core.exception.AQException;

/*
 * 
 * @author Sebin
 *
 */
@UserLibrary(tags = "File;Copy;LastModified;")
public class CopyRecentFileUsingTimestamp {

	@Command(displayName = "Copy Recently Modified Files using Timestamp ", templateStr = "Copy Recently Modified Files Using TimeStamp <param1> from Folder Path <param2> to <param3> ", description = "Copy the recently modified files after timestamp from Source to Destination ", deprecated = false, isVerification = false, tags = "File,Directory;Folder;Copy;Lastmodified;Modified")
	public void copyRecentFilesFromSrcToDestination(
			@Parameter(name = "File Modified After", description = "LocalDateTime Format eg:1999-01-30T20:30") String modifiedTimeBefore,
			@Parameter(name = "srcFolderPath", description = "Source Folder Path") String srcFolderPath,
			@Parameter(name = "dstFolderPath", description = "Destination Folder Path") String dstFolderPath) {
		try {
			LocalDateTime recentFileTime = LocalDateTime.parse(modifiedTimeBefore);
			if (srcFolderPath != null && !srcFolderPath.trim().equals("") && dstFolderPath != null
					&& !dstFolderPath.equals("")) {
				Path source = Paths.get(srcFolderPath);
				Path target = Paths.get(dstFolderPath);

				if (!source.equals(target)) {

					List<Path> lastmodifiedFilePaths = new ArrayList<>();

					File srcFolder = new File(srcFolderPath);

					File[] listOfFiles = srcFolder.listFiles();
					for (int i = 0; i < listOfFiles.length; i++) {

						if (listOfFiles[i].isFile()) {

							BasicFileAttributes attr = Files.readAttributes(listOfFiles[i].toPath(),
									BasicFileAttributes.class);
							FileTime fileTime = attr.lastModifiedTime();
							LocalDateTime filecreationTime = fileTime
									.toInstant()
									.atZone(ZoneId.systemDefault())
									.toLocalDateTime();
							boolean isAfter = filecreationTime.isAfter(recentFileTime);

							if (isAfter) {
								lastmodifiedFilePaths.add(listOfFiles[i].toPath());

							}

						}

					}

					for (Path path : lastmodifiedFilePaths) {
						SingletonInstancesRepo.getAqLogUtils().info_("File Copied :" + path.getFileName());
						String scrpath = source.toString() + File.separator + path.getFileName();
						String dstpath = target.toString() + File.separator + path.getFileName();

						Path source_file_path = Paths.get(scrpath);
						Path target_file_path = Paths.get(dstpath);

						Files.move(source_file_path, target_file_path);
					}
					SingletonInstancesRepo.getAqLogUtils()
							.info_("Recent Files till " + recentFileTime + " Copied Successfully");
				} else {
					System.out.println("Both source and destination folder are same.");
					throw new IllegalArgumentException("Invalid input parameters.");
				}
			} else {
				System.out.println("Invalid input.");
				throw new IllegalArgumentException("Invalid input parameters.");
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
