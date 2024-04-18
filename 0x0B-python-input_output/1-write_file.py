#!/usr/bin/python3

def write_file(filename="", text=""):
    try:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(string)
            return len(string)
    except Exception as e:
        print("Error:", e)
        return -1  # Return -1 to indicate an error occurred
