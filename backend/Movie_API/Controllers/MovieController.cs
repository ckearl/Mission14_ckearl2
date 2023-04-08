using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Movie_API.Data;

namespace Movie_API.Controllers;
[ApiController]
[Route("[controller]")]
public class MovieController : Controller
{
    private MovieDbContext context;
    public MovieController(MovieDbContext temp)
    {
        context = temp;
    }
    
    
    public IEnumerable<MovieCollection> Get()
    {
        var m = context.Movies
            .Where(m => m.Edited == false )
            .OrderBy(m => m.Title)
            .ToArray();
        return m;
    }
}