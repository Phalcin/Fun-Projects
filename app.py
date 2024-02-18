import random

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


# import random

# top_of_range = input("type in a number negga: ")

# if top_of_range.isdigit():
#     top_of_range = int(top_of_range)
#     if top_of_range <= 0:
#         print("please type a number greater than 0 next time")
# else:
#     print("please type a number next time")


# random_number = random.randint(0, top_of_range)

# guesses = 0
# while True:
#     guesses += 0
#     user_guess = input("make a guess: ")
#     if user_guess.isdigit():
#         user_guess = int(user_guess)
#     else:
#         print("please type a number next time")
#         continue
#     if user_guess == random_number:
#         print("You got it bro!")
#         break
#     else:
#         print(f"you got {random_number} number wrong")

# print(f"you got it in {guesses} guesses")

# user_score = 0
# computer_wins = 0
# options = ["rock", "paper", "scissors"]

# while True:
#     user_input = input("Type rock, paper or scissors / q to quit: ")
#     if user_input == "q":
#         print("see you next time bro")
#         break

#     if user_input not in options:
#         continue
#     random_number = random.randint(0, 2)
#     computer_pick = options[random_number]
#     print(f"user chose")
#     print(f"computer chose {computer_pick}")

#     if user_input == "rock" and computer_pick == "scissors":
#         print("You won bro")
#         user_score += 1

#     elif user_input == "paper" and computer_pick == "rock":
#         print("You won bro!")
#         user_score += 1

#     elif user_input == "scissors" and computer_pick == "paper":
#         print("You won bro")
#         user_score += 1

#     else:
#         print("You lost")
#         computer_wins += 1


pwd = input("What is the master password")

mode = input(
    "Would you like to add a new password or view existing ones (view, add)? Or just press q to quit"
)

def view():


def add():
  name = input("Account Name: ")
  let pwd = input('Password: ')


while True:
    if mode == "q":
        exit()

    if mode == "view":
        view()
    elif mode == "add":
        add()
    else:
        continue

    person1 = input('type in first number')
    person2 = input('type in second number')
    fullName = person1 + person2
    print(fullName)
