package com.thinkcore.thinkcoretrainingproject;

// import java.security.Timestamp;
// import java.text.SimpleDateFormat;
// import java.time.LocalDateTime;
// import java.time.ZoneId;
// import java.util.Date;

import com.accelq.common.library.annotations.Command;
import com.accelq.common.library.annotations.Parameter;
import com.accelq.common.library.annotations.UserLibrary;
import com.accelq.core.SingletonInstancesRepo;
import com.accelq.core.exception.AQException;

@UserLibrary(tags = "LocalDateTime;Date;Time")
public class CalOpo {
	@Command(displayName = "Arvin calculator", templateStr = "Arvin calculator operand1<param1>operand2<param2>operator<param3>", description = "Output will be arthmetic operation on two numbers", deprecated = false, isVerification = false, tags = "LocalDateTime;Date;Time")
	public int getNowLocaldateTime(
			@Parameter(name = "operand1", description = "value 1") String a,
			@Parameter(name = "operand2", description = "value2") String b,
			@Parameter(name = "operator", description = "value3 enter arthmetic operator (+,-,*,/)") String c) {

		// if (c.equals("+")) {
		// return Integer.parseInt(a) + Integer.parseInt(b);
		// }
		// if (c.equals("-")) {
		// return Integer.parseInt(a) - Integer.parseInt(b);
		// } else {
		// return 0;
		// }
		int result = 0;
		int value1 = Integer.parseInt(a);
		int value2 = Integer.parseInt(b);
		switch (c) {
			case "+": {
				result = value1 + value2 + value1;
				break;

			}
			case "-": {
				result = value1 - value2;
				break;

			}
			case "*": {
				result = value1 * value2;
				break;

			}
			case "/": {
				result = value1 / value2;
				break;

			}

		}
		return result;

	}

}
