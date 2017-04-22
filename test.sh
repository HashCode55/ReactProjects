# API Tests

echo "\nTESTING GET REQUEST\n\n" 
# test GET on /api/notes: returns array of notes
curl -v localhost:3000/api/notes 

# Same test with a If-None-Match that matches a previous etag. This
# will return a 304.
curl -v --header 'If-None-Match: W/"b5-F1b7cwQ6h9O04csifWqkw"' localhost:3000/api/notes 

echo "\nTESTING POST REQUEST\n\n" 
# Test the POST request 
curl -v \
	--header 'Content-Type: application/json' \
  	--data '{"text":"UTA001 link shared - *mimick link*", "time":"Time", "votes":"4", "user_id":"shaggy", "board_id":"uj83jd", "tag_one":"COE", "tag_two":"CML"}' \
  	http://localhost:3000/api/notes