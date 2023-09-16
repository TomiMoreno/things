# Script to extract text from a PDF file and save it in a txt file
# It considers special characters, line breaks and page breaks, works for a specific kind of PDF

import PyPDF2

PDF_PATH = "./tyc.pdf"
WRITE_PATH = "./tyc.txt"


# Open the PDF
with open(PDF_PATH, "rb") as file:
    # Create a PDF reader
    reader = PyPDF2.PdfReader(file)
    # Initialize an empty string to store the text
    text = ""
    # Iterate over all the pages and extract the text
    for i in range(len(reader.pages)):
        page = reader.pages[i]
        currentText = page.extract_text()
        for line in currentText.split("\n"):
            if(not line.startswith('Página') and line != " "):
              trimmedLine = line.strip()
              isCapitalLetter = len(line) == 2 and line[0].isupper() and line[1] == ' '
              isNumberWithDot = len(line) == 2 and line[0].isdigit() and line[1] == '.'
              isLetterWithParenthesis = line[0].lower() and line[1] == ')'
              endsWithDot = trimmedLine.endswith('.')
              endsWithColon = trimmedLine.endswith(':')
              isLineStart = isCapitalLetter or isNumberWithDot or isLetterWithParenthesis
              isLineEnd = isCapitalLetter or endsWithDot or endsWithColon 
              if(isLineStart):
                text += "\n"
              text += line 
              if(isLineEnd):
                text += "\n"
# Create a txt file with the contents
with open(WRITE_PATH, "w", encoding="utf-8") as file:
    file.write(text)
