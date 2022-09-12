
y = 1
while y <= 10
    y += 1
    next unless (y % 2 == 0)
        puts y
end


(0..5).each do | i | 
    puts "print #{i}"
end


print "Enter a  Number: "
first_num = gets.to_i
print "enter another: "
second_num = gets.to_i

begin
    answer = first_num / second_num
rescue
    puts "You can not divide by zero"
    exit 
end 
puts "#{first_num} / #{second_num} = #{answer}"

    
first_name = "rails"
second_name = "Abam"

full_name = first_name + second_name
puts "vowels: "+ full_name.count("^Bassey").to_s  
