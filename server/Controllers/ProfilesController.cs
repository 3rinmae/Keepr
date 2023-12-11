namespace Keepr.Controllers;
[ApiController]
[Route("api/[controller]")]
public class ProfilesController : ControllerBase
{
  private readonly Auth0Provider _auth0Provider;
  private readonly KeepsService _keepsService;
  private readonly VaultsService _vaultsService;
  private readonly AccountService _accountService;


  public ProfilesController(Auth0Provider auth0Provider, KeepsService keepsService, VaultsService vaultsService, AccountService accountService)
  {
    _auth0Provider = auth0Provider;
    _keepsService = keepsService;
    _vaultsService = vaultsService;
    _accountService = accountService;
  }

  [HttpGet("{profileId}")]
  public ActionResult<List<Profile>> GetProfileById(string profileId)
  {
    try
    {
      Profile profile = _accountService.GetProfileById(profileId);
      return Ok(profile);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }


}