-- Q1
select distinct name
from reviewer join rating on reviewer.rID = rating.rID join movie on rating.mID = movie.mID
where title = 'Gone with the Wind';

-- Q2
select name, title, stars
from reviewer join rating on reviewer.rID = rating.rID join movie on rating.mID = movie.mID
where name = director;