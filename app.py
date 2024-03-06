# import sys
# import random
# from enum import Enum


# class RPS(Enum):
#     ROCK = 1
#     PAPER = 2
#     SCISSORS = 3


# player_choice = input("Enter... \n1 for Rock, \n2 for Paper, or \n3 for Scissors:\n\n")

# player = int(player_choice)

# if player < 1 or player > 3:
#     sys.exit("You must enter 1,2 or 3.")

# computer_choice = random.choice("123")
# computer = int(computer_choice)

# print("")
# print("You chose " + str(RPS(player)).replace("RPS.", "") + ".")
# print("Python chose " + str(RPS(computer)).replace("RPS.", "") + ".")
# print("")

# if player == 1 and computer_choice == 3:
#     print("You win!")
# elif player == 2 and computer_choice == 1:
#     print("You win!")
# elif player == 3 and computer_choice == 2:
#     print("You win!")
# elif player == computer:
#     print("Tie game")
# else:
#     print("Python wins!")

users = ["Dave", "John", "Sara"]

data = ["Dave", 42, True]

empty_list = []

print("Dave" in empty_list)

print(users[0])
print(users[-1])

print(users.index("Sara"))

print(users[0:2])
print(users[1:])
print(users[-3:-1])

print(len(data))

users.append("Elsa")
print(users)

users += ["Jason"]
print(users)

users.extend(["Robert", "Jimmy"])
print(users)

users.sort(key=str.lower)
print(users)

nums = [4, 42, 78, 1, 5]
nums.reverse()
nums.sort(reverse=True)
print(nums)

nums_copy = nums.copy()

my_tuple = tuple(("Dave", 42, True))

another_tuple = (1, 4, 2, 8)
print(my_tuple)
print(type(my_tuple))
print(type(another_tuple))

new_list = list(my_tuple)
new_list.append("neil")
new_tuple = tuple(new_list)
print(new_tuple)
print(new_list)
(one, *two, hey) = another_tuple
print(one)
print(two)
print(hey)

# Dictionaries
band = {
    "vocals": "Plant",
    "guitar": "page",
}

band2 = dict(vocals="Plant", guitar="Page")
print(band)
print(band2)
print(type(band))
print(len(band))
print(band.keys())
print(band.values())
print(band.items())
print("guitar" in band)

band.update({"bass": "jpj"})
print(band)
print(band.pop("bass"))
