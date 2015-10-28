class Card
  attr_accessor :suite, :name, :value

  def initialize(suite, name, value)
    @suite, @name, @value = suite, name, value
  end
end

class Deck
  attr_accessor :playable_cards
  SUITES = [:hearts, :diamonds, :spades, :clubs]
  NAME_VALUES = {
    :two   => 2,
    :three => 3,
    :four  => 4,
    :five  => 5,
    :six   => 6,
    :seven => 7,
    :eight => 8,
    :nine  => 9,
    :ten   => 10,
    :jack  => 10,
    :queen => 10,
    :king  => 10,
    :ace   => [11, 1]}

  def initialize
    shuffle
  end

  def deal_card
    random = rand(@playable_cards.size)
    @playable_cards.delete_at((random - 1))
    random 
  end

  def shuffle
    @playable_cards = []
    SUITES.each do |suite|
      NAME_VALUES.each do |name, value|
        @playable_cards << Card.new(suite, name, value)
      end
    end
  end
end

#TODO: DRY player and dealer into extending a Hand class 
class Player < Deck  
  attr_accessor :cards, :total 

  def initialize
    @deck = Deck.new 
    @cards = []
  end

  def starting_hand
    2.times do 
      @cards << @deck.deal_card
    end
    if busted? 
      @cards
    else  
      @cards
    end 
  end 

  def busted?
    @total = 0 
    @cards.each do |card| 
      @total += card 
    end 
    @total > 21 ? true : false 
  end 

  def blackjack? 
    @total = 0 
    @cards.each do |card| 
      @total += card 
    end 
    @total = 21 ? true : false 
  end 
end

class Dealer < Deck  
  attr_accessor :cards

  def initialize
    @deck = Deck.new 
    @cards = []
  end

  def starting_hand
    2.times do 
      @cards << @deck.deal_card
    end 
    @cards
  end 

  def dealer_show
    @cards.sample 
  end 

  def draw_card
    @cards << @deck.deal_card
    if busted?
      puts 'dealer busted'
    end 
    if blackjack?
      puts 'dealer wins'
    end 
end

require 'test/unit'

class CardTest < Test::Unit::TestCase
  def setup
    @card = Card.new(:hearts, :ten, 10)
  end
  
  def test_card_suite_is_correct
    assert_equal @card.suite, :hearts
  end

  def test_card_name_is_correct
    assert_equal @card.name, :ten
  end
  def test_card_value_is_correct
    assert_equal @card.value, 10
  end
end

class DeckTest < Test::Unit::TestCase
  def setup
    @deck = Deck.new
  end
  
  def test_new_deck_has_52_playable_cards
    assert_equal @deck.playable_cards.size, 52
  end
  
  def test_dealt_card_should_not_be_included_in_playable_cards
    card = @deck.deal_card
    assert(!@deck.playable_cards.include?(card))
  end

  def test_shuffled_deck_has_52_playable_cards
    @deck.shuffle
    assert_equal @deck.playable_cards.size, 52
  end

end

class HandTest < Test::Unit::TestCase 
  def setup
    @player = Player.new 
    @dealer = Dealer.new 
  end 

  def test_player_hand_has_2_starting_cards
    @player.starting_hand
    assert_equal @player.cards.length, 2
  end 

  def test_dealer_hand_has_2_starting_cards
    @dealer.starting_hand
    assert_equal @dealer.cards.length, 2
  end 

  def test_dealer_shows_card
    assert_respond_to(@dealer, :dealer_show)
  end 

  def test_player_can_bust_immediately
    @player.cards[0] = 22
    assert(@player.busted?)
  end 

  def test_player_can_win_immediately
    @player.cards[0] = 21
    assert(@player.blackjack?)
  end 

  def dealer_can_draw_until_bust_or_blackjack
    loop do 
      @dealer.draw_card
    break if assert(busted? || blackjack?)
end 
end 

