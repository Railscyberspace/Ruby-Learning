
print "Enter Your details: "
user_input = gets.chomp
user_input.downcase!
if user_input.include? "s"
details = user_input.gsub!(/s/, "Rails")
puts details
end

goodAnswer = false
while (not goodAnswer)
  puts 'Do you like eating banana?'
  answer = gets.chomp.downcase
  if (answer == 'yes' or answer == 'no')
    goodAnswer = true
  else
    puts 'Please answer "yes" or "no".'
  end
end