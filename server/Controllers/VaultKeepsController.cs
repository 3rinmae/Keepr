namespace Keepr.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VaultKeepsController : ControllerBase
{
  private readonly Auth0Provider _auth0Provider;
  private readonly VaultKeepsService _vaultKeepsService;
  private readonly VaultsService _vaultsService;

  public VaultKeepsController(Auth0Provider auth0Provider, VaultKeepsService vaultKeepsService, VaultsService vaultsService)
  {
    _auth0Provider = auth0Provider;
    _vaultKeepsService = vaultKeepsService;
    _vaultsService = vaultsService;
  }

  [Authorize]
  [HttpPost]
  public async Task<ActionResult<VaultKeep>> CreateVaultKeep([FromBody] VaultKeep vaultKeepData)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      vaultKeepData.CreatorId = userInfo.Id;
      _vaultsService.GetVaultById(vaultKeepData.VaultId, userInfo.Id);
      VaultKeep vaultKeep = _vaultKeepsService.CreateVaultKeep(vaultKeepData);
      return Ok(vaultKeep);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }


}