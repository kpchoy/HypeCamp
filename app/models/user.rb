class User < ApplicationRecord
    validates :session_token, :password_digest, :first_name, :last_name, presence: true
    validates :email, presence: true, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :owned_campsites,
      foreign_key: :owner_id,
      class_name: :Campsite 

    has_many :bookings,
      foreign_key: :guest_id,
      class_name: :Booking 

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
    
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
      self.session_token = SecureRandom.urlsafe_base64
      self.save!
      self.session_token
    end
end
