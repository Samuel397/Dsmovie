package com.devsuperior.Dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.Dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);

}
