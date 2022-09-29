srand 300
puts(rand(100)) # Use for repeating same number

puts "Welcome  to the table: "
name = gets.chomp.capitalize

if name == "Rails"
    puts "You are a destiny code " + ''+name 
elsif name.downcase 
    puts "You are not just" +  '' + name
else  
    puts "You are far from it"
    
end

puts "Follow instructions"
command = " "
command = gets.chomp
while command == command
    puts "You are right on track"
    break
end
    puts "You do not follow instructions"
