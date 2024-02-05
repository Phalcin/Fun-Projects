import math

random_local_girls = [
    "Akua",
    "Ama",
    "Abena",
    "Afia",
    "Adwoa",
    "Yaa",
    "Akosua",
]


def start_game():
    return play_game()


def play_game():
    play_game = input("Do you wanna play the fucking game or not? ")
    if play_game == "yes":
        player_option = input("Type your freaking local Ghanaian name bro: ")
        if player_option.__contains__("k"):
            girl_name = random_local_girls[0]
            print(f"Congratulations you match {girl_name}")
    elif play_game == "no":
        print("Go away bro, see ya next time")
    elif play_game != "yes" or play_game != "no":
        print("You should type only yes or no")
        start_game()
    else:
        print("Bro we'll see you next fucking time")


play_game()
