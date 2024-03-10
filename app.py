# number_of_seconds = float(input('Enter the number of seconds: '))

# one_mi

# if number_of_seconds > 60:


employee_hourly_pay = float(input("Enter the employee hourly wage: Ghs"))

employee_work_hours = float(input("Enter the employee work time: "))

if employee_work_hours <= 40:
    employee_regular_pay = employee_hourly_pay * employee_work_hours
    print(f"Employees pay for the week is: Ghs{employee_regular_pay}")
else:
    employee_regular_pay = employee_hourly_pay * 40
    overtime_pay = (employee_work_hours - 40) * employee_hourly_pay * 1.5
    print(
        f"Employee's total pay is Ghs{employee_regular_pay + overtime_pay}, including overtime pay of Ghs{overtime_pay}"
    )
