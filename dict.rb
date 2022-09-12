my_dict = {
    "name" => "rails",
    "age" => 29,
    "baby" => "ruby",
    "ruby_age" => 3
}

puts my_dict["age"]
my_dict["day"] = "mon"
my_dict["my_joy"] = "ruby"
puts my_dict


num = [3,4, 56, 29, 30]
for nums in num
    puts nums
end

5.times do |index|
  puts index

end



class Book 
  attr_accessor :title, :author


  def readBook()
    puts "I like Reading #{self.title} by author #{self.author}"
  end

end

book1 = Book.new()
book1.title = "Harry Potter"
book1.author = "Jk Rowling"

book1.readBook()


class Name 
  attr_accessor :firstname, :lastname
  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def myName()
  puts "My new name is #{self.firstname} and #{@lastname}"
  end


end

names = Name.new("Rails", "Abam")
puts names.myName
