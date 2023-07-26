package com.thinkcore.thinkcoretrainingproject;

import java.security.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import com.accelq.common.library.annotations.Command;
import com.accelq.common.library.annotations.Parameter;
import com.accelq.common.library.annotations.UserLibrary;
import com.accelq.core.SingletonInstancesRepo;
import com.accelq.core.exception.AQException;

@UserLibrary(tags = "LocalDateTime;Date;Time")
public class GetLocalDateTime {
	@Command(displayName = "Get Date and Time in Java LocalDateTimeFormat", templateStr = "Get LocalDateTime in the timezone<param1>", description = "Output will be in the LocalDateTime format", deprecated = false, isVerification = false, tags = "LocalDateTime;Date;Time")
	public String getNowLocaldateTime(
			@Parameter(name = "Timezone", description = "Timezone is in a Format GMT/UTC Eg: GMT+5") String zoneName) {
		ZoneId zid = ZoneId.of(zoneName);
		LocalDateTime dateTimeNow = LocalDateTime.now(zid);
		String dateTimeString = dateTimeNow.toString();
		return dateTimeString;
	}

}
