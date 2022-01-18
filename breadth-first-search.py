graph = {}

graph["you"] = ["bob","alice","claire"]
graph["bob"] = ["anuj","peggy"]
graph["alice"] = ["peggy","yo"]
graph["claire"] = ["jonny","thom"]
graph["thom"] = []
graph["anuj"] = []
graph["jonny"] = []
graph["peggy"] = []
graph["yo"] = ["yom"]

 

def person_is_seller(name):
  return name[-1] == 'm'

def search(name):
  search_queue = []
  search_queue += graph[name]
  searched = []

  while search_queue:
    person = search_queue.pop(0)
    if person not in searched:  
      if person_is_seller(person):
        print( person,"is a mango seller")
        return
      else:
        search_queue += graph[person]
  return False  

search("you")