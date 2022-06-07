
import re
def translate(word_or_phrase):
  vowels = ['a','e','i','o','u']
  words = word_or_phrase.split()

  for i, word in enumerate(words):

    if word[0] in vowels:
        words[i] = words[i]+ "ay"
    else:
        has_vowel = False
        
        for j, letter in enumerate(word):
            if letter in vowels:
                  if letter == 'u':
                    words[i] = word[j + 1:] + word[:j + 1]
                    has_vowel == True
                  else :
                    words[i] = word[j:] + word[:j] + "ay"
                    has_vowel = True
                    break
        if(has_vowel == False):
            words[i] = words[i]+ "ay"

  pig_latin = ' '.join(words)
  return pig_latin
    

    
    


# print(translate("apple university"))
# print(translate("square"))