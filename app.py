# play_game = input("Do you wanna play this game? ")
# import math

# if play_game.lower() != "yes":
#     exit()

# print(f"yes lets play")
# score = 0

# answer = input("What does CPU stand for: ")
# if answer.lower() == "central processing unit":
#     print("Correct!")
#     score += 1
# else:
#     print("Incorrect!")

# answer = input("What does RAM stand for: ")
# if answer.lower() == "random access memory":
#     print("Correct!")
#     score += 1
# else:
#     print("Incorrect!")

# print(
#     f"Congratulations you successfully played the game, you score is {int((score / 2) * 100)}%"
# )


import random

top_of_range = input("type in a number negga: ")

if top_of_range.isdigit():
    top_of_range = int(top_of_range)
    if top_of_range <= 0:
        print("please type a number greater than 0 next time")
else:
    print("please type a number next time")


random_number = random.randint(0, top_of_range)

guesses = 0
while True:
    guesses += 0
    user_guess = input("make a guess: ")
    if user_guess.isdigit():
        user_guess = int(user_guess)
    else:
        print("please type a number next time")
        continue
    if user_guess == random_number:
        print("You got it bro!")
        break
    else:
        print(f"you got {random_number} number wrong")

print(f"you got it in {guesses} guesses")
