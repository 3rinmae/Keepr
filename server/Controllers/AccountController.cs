namespace Keepr.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
  private readonly AccountService _accountService;
  private readonly Auth0Provider _auth0Provider;
  private readonly VaultKeepsService _vaultKeepsService;

  public AccountController(AccountService accountService, Auth0Provider auth0Provider, VaultKeepsService vaultKeepsService)
  {
    _accountService = accountService;
    _auth0Provider = auth0Provider;
    _vaultKeepsService = vaultKeepsService;
  }

  [HttpGet]
  [Authorize]
  public async Task<ActionResult<Account>> Get()
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      return Ok(_accountService.GetOrCreateProfile(userInfo));
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

  // [Authorize]
  // [HttpGet("vaults")]
  // public async Task<ActionResult<List<VaultVaultKeep>>> GetVaultVaultKeepsByAccountId()
  // {
  //   try
  //   {
  //     Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
  //     List<VaultVaultKeep> vaultVaultKeeps = _vaultKeepsService.GetVaultVaultKeepsByAccountId(userInfo.Id);
  //     return Ok(vaultVaultKeeps);
  //   }
  //   catch (Exception exception)
  //   {
  //     return BadRequest(exception.Message);
  //   }
  // }
}
