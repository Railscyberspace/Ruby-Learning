

# puts "The favorite song lyrics is: "
# song = "99 Bottles of Beer on the Wall."
# song = gets.chomp
# if song == song
#     puts "Yea that is the song"
# elsif song != song 
#     puts "Play the right song for me please"
# else  
#     puts "You are not a good DJ player"
# end 


# favorites = []
# favorites.push 'raindrops on roses'
# favorites.push 'whiskey on kittens'
# favorites.push "Hello Rails"

# puts favorites[0]
# puts favorites.last
# puts favorites.length

# puts favorites.pop
# puts favorites
# puts favorites.length





# Ruby program to illustrate 'for'
# loop using range as expression
 
# i = "Sudo Placements"
 
# # using for loop with the range
# for a in 1..5 do
     
#  puts i
  
# # end

# def my_string_index(haystack, needle)
    
#     for x in 0..haystack.length
#         if haystack[x..needle.length] == needle
#             return x 
#         elsif haystack[x..needle.length] != needle[x]
#     end  
#     return x = x + 2
# end 
# end 
# puts my_string_index("aaaaa", "b")




# def my_string_index(haystack, needle)
    
#     for x in 0..haystack.length
#         if haystack == x
#             return x 
#         elsif haystack[x..needle.length] != needle[x]
#     end  
#     return x = x + 2
# end 
# end 
# puts my_string_index("aaaaa", "b")









name ="ranjan"
for b in 0..3 do
    puts b, name[1]
    # if b[1] == name[1]
    #     puts b
    # else 
    #     puts "yea"
    # end
puts "Hello mr #{name}#{b} How are you"
end