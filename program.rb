

puts "The favorite song lyrics is: "
song = "99 Bottles of Beer on the Wall."
song = gets.chomp
if song == song
    puts "Yea that is the song"
elsif song != song 
    puts "Play the right song for me please"
else  
    puts "You are not a good DJ player"
end 


favorites = []
favorites.push 'raindrops on roses'
favorites.push 'whiskey on kittens'
favorites.push "Hello Rails"

puts favorites[0]
puts favorites.last
puts favorites.length

puts favorites.pop
puts favorites
puts favorites.length