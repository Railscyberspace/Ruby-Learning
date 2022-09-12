#Inheritance
class Chef 

    attr_accessor :age, :name
    def initialize(age, name)
        puts "Our chef age is #{age} and the name  is #{name}"
    end

    

    def make_chicken()
        puts "Our chef #{self.name} make chicken"

    end
     
    def make_salad()
        puts "Our new chef new age is #{self.age}"
    end
end



class SecondChef < Chef
    attr_accessor :country_of_origin
    def initialize(age, name, country_of_origin)
        @country_of_origin = country_of_origin
        super(name, age)
    end

    def make_pasta()
         puts "make pasta"
    end

    def make_dish()
        puts "makes dishs"
    end

end 


my_chef = Chef.new(30, "Bukky")
puts my_chef.make_chicken