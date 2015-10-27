module Where
  def where(args)
  	@keys = []
  	@vals = []
  	@matches = [] 
    args.each do |key, value|
    	@keys.push(key)
    	@vals.push(value)
    end
    self.each do |obj|
    	@full_match = 0 
    	@keys.length.times do |i|
    		 @vals[i] = @vals[i].to_s.tr('/', '')
    		 
    		if obj[@keys[i]].to_s =~ Regexp.new(@vals[i].to_s)
    			@full_match += 1   
    		end 
    	end
    	if @full_match == @keys.length 
    			@matches.push(obj)
    	end  
    end 
    @matches
  end
end 
