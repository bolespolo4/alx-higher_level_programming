#!/usr/bin/python3

def write_file(filename="", text=""):
    """reads fielname with utf-8"""
    with open(filename, "w", encoding='utf-8') as f;
        return f.write(text);
