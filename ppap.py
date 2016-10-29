import urllib2,sys
from bs4 import BeautifulSoup

url = "https://www.iitg.ernet.in/kvsrikanth/teaching/2016f/att-finger/index.php"

page = urllib2.urlopen(url)
soup = BeautifulSoup(page)

S = ""

all_td = soup.find_all("td")
for td in all_td:
	s = td.text
	if len(s) == 1 and s.isalpha():
		S += s

print S.count("PPAP")
		
