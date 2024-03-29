import rsa

publicKey, privateKey = rsa.newkeys(512)


def convert_int_to_ascii(int_to_convert):
    return chr(int_to_convert)


def convert_ascii_array_to_string_array(ascii_array_to_convert):
    ascii_array_to_convert = ','.join(str(x) for x in ascii_array_to_convert)
    return ascii_array_to_convert


def convert_string_to_list(string_to_convert):
    string_to_convert = string_to_convert.split(',')
    return string_to_convert


def convert_ascii_list_to_string(ascii_list_to_convert):
    return_val = ""
    for x in ascii_list_to_convert:
        return_val = return_val + convert_int_to_ascii(int(x))
    return return_val


def main():
    # ask credentials
    username = input("Please enter your username: \n")
    password = input("Please enter your password: \n")

    # Define message
    password_array_ascii = [112, 97, 115, 115, 119, 111, 114, 100, 49, 50, 51, 13, 10]
    message_ascii_array = [102, 108, 97, 103, 123, 112, 57, 67, 113, 125]
    message_ascii_string = convert_ascii_array_to_string_array(message_ascii_array)
    password_ascii_string = convert_ascii_array_to_string_array(password_array_ascii)
    password_ascii_list = convert_string_to_list(password_ascii_string)
    flag_message = ""
    desired_password = ""

    # encrypt message
    encrypted_message = rsa.encrypt(message_ascii_string.encode(), publicKey)

    # decrypt message
    decrypted_message = rsa.decrypt(encrypted_message, privateKey).decode()

    # convert decrypted_message string to list
    decrypted_message = convert_string_to_list(decrypted_message)

    # convert ascii list to text string
    for i in decrypted_message:
        flag_message = flag_message + convert_int_to_ascii(int(i))

    for i in password_ascii_list:
        desired_password = desired_password + convert_int_to_ascii(int(i))

    print("__________________________________")
    print("")
    if username.lower() == "admin" and password.lower().strip() == desired_password.strip():
        print("Hello, admin! Here is your flag :)! \n")
        print("Flag: " + flag_message)
    else:
        print("Error! Invalid credentials, the flag is still encrypted! \n")
        print("Flag: " + str(encrypted_message))


if __name__ == "__main__":
    main()
