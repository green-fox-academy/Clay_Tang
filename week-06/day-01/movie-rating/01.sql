-- Q1
select title
from movie
where director = 'Steven Spielberg';

-- Q2
select distinct year
from movie join rating on movie.mID = rating.mID
where stars = 5 or stars = 4
order by year asc;

-- Q3
select title
from movie left join rating on movie.mID = rating.mID
where stars is null;

-- Q4
select name
from reviewer join rating on reviewer.rID = rating.rID
where ratingDate is null;

-- Q5
select name, title, stars, ratingDate
from movie join rating on movie.mID = rating.mID join reviewer on rating.rID = reviewer.rID
order by name, title, stars asc;