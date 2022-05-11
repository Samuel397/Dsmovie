package com.devsuperior.Dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.Dsmovie.entities.Score;
import com.devsuperior.Dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	

}
