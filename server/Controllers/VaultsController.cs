namespace Keepr.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VaultsController : ControllerBase
{
  private readonly Auth0Provider _auth0Provider;
  private readonly VaultsService _vaultsService;

  public VaultsController(Auth0Provider auth0Provider, VaultsService vaultsService)
  {
    _auth0Provider = auth0Provider;
    _vaultsService = vaultsService;
  }

  [Authorize]
  [HttpPost]
  public async Task<ActionResult<Vault>> CreateVault([FromBody] Vault vaultData)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      vaultData.CreatorId = userInfo.Id;
      Vault vault = _vaultsService.CreateVault(vaultData);
      return Ok(vault);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [HttpGet("{vaultId}")]
  public async Task<ActionResult<Vault>> GetVaultById(int vaultId)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      Vault vault = _vaultsService.GetVaultById(vaultId, userInfo?.Id);
      return Ok(vault);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }
}