# movie_name = "The good, bad"
# # ordered
# mixed = [1, 2, 3.2, 5.4, True, "Emmanuel", [1, 2, 3]]
# print(type(mixed))

# # unordered
# user_info = {"user_name": "awesome", "user_id": 56}
# console.log(user_info)

# tuple
mixed_tuple = (
    1,
    2,
    3,
    4,
    5,
    True,
    "Emmanuel",
    [1, 2, 3, 4],
)
print(mixed_tuple)
# unordered
# set

mixed_set = {1, 2, 3, 4, 5, True, "muslim "}
print(mixed_set)
# - len()
address = "Ghana"
print(len(address))

# 2 - [] Notation
print(len(address))

# 3 [] Notation
print(address[0:4])
print(address[-3:-1])
print(address[:9])
print(address[:])

# 4 - Concatenation
country = "USA"
city = "NYC"
full_address = city + ", " + country
print(full_address)

# 5 - upper()
print(address.upper())
print(address.lower())
print(full_address.title())

# 6 - strip()
job = " programmer  "
print(job)
print(job.strip())

# 7 - find()
print(address.find("n"))
print(address.replace("Gha", "Na"))

# in operator
print("ne" in address)
print("na" in address)

# 12 ! operator
print("ne" not in address)
print("na" not in address)
