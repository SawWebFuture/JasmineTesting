//	Code great for testing a NaN function
//  name of the NaN checking function - replacePossibleNaN

	it("replacePossibleNaN must replace NaN(Not-A-Number) with n.a.", function() {
		var word = Utility.replacePossibleNaN("Hello");
		var date = Utility.replacePossibleNaN("2005/12/12");
		var undefinedString = Utility.replacePossibleNaN(undefined);
		var NaNString = Utility.replacePossibleNaN("NaN");
		var NaNValue = Utility.replacePossibleNaN(NaN);
		var fractions = Utility.replacePossibleNaN(0 / 0);
		expect(word).toBe("n.a.");
		expect(date).toBe("n.a.");
		expect(undefinedString).toBe("n.a.");
		expect(NaNString).toBe("n.a.");
		expect(NaNValue).toBe("n.a.");
		expect(fractions).toBe("n.a.");
	});
	
	it("replacePossibleNaN must replace non-NaN(Not-A-Number) with original value", function() {
		var num = Utility.replacePossibleNaN(123);
		var negativeDecNum = Utility.replacePossibleNaN(-1.23);
		var arithmatic = Utility.replacePossibleNaN(5-2);
		var zero = Utility.replacePossibleNaN(0);
		var numString = Utility.replacePossibleNaN("123");
		var empty = Utility.replacePossibleNaN("");
		var boolean = Utility.replacePossibleNaN(true);
		expect(num).toBe(123);
		expect(negativeDecNum).toBe(-1.23);
		expect(arithmatic).toBe(5-2);
		expect(zero).toBe(0);
		expect(numString).toBe("123");
		expect(empty).toBe("");
		expect(boolean).toBe(true);
	});
