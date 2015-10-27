module Where 

    def where(args)
    	@keys = []
    	@vals = []
    	count = 0
    	@matches = [] 
        args.each do |key, value|
        	@keys.push(key)
        	@vals.push(value)
        end
        puts @keys
        puts @vals
        self.each do |obj|
        	@keys.length.times do |i|
        		if obj[@keys[i]].to_s =~ Regexp.new(@vals[i].to_s)
        			@matches.push(obj)
        		else 
        			puts 'no'
        		end 
        	end 
        	# next unless obj[@keys[count]].include?(@vals[count])
        	# puts 'what'
        	# puts obj[@keys[1]]
        end 
         @matches
    end
end
