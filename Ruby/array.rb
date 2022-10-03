
arr = [1, 2, 3, 4, 5].to_a
puts(arr)
def my_arr(param)
    new_arr = []
    x = 0
while x < param.length do 
     param[x] * 2
    result =  new_arr.push(param[x] * 2)
    x += 1
end
return result

end
save = my_arr(arr).to_a
puts(save)




# # Initializing some arrays of elements
# Array1 = [1, 2, 3, 4]
# A = Array1.push(5, 6, 7)  
# puts "#{A}"



# def replicate(times, number)
#     return [] 
#     if times <= 0
#     [ number ] + replicate(times - 1, number)
#     end
# end
# puts(replicate(save, 5))