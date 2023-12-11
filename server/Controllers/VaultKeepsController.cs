using Microsoft.AspNetCore.Http.HttpResults;

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
      Vault vault = _vaultsService.GetVaultById(vaultKeepData.VaultId, userInfo?.Id);
      if (vault.CreatorId != vaultKeepData.CreatorId)
      {
        throw new Exception("Not your vault to add to");
      }
      VaultKeep vaultKeep = _vaultKeepsService.CreateVaultKeep(vaultKeepData);
      return Ok(vaultKeep);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [Authorize]
  [HttpDelete("{vaultKeepId}")]
  public async Task<ActionResult<string>> DestroyVaultKeep(int vaultKeepId)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      VaultKeep vaultKeep = _vaultKeepsService.GetVaultKeepById(vaultKeepId);
      if (vaultKeep.CreatorId != userInfo.Id)
      {
        throw new Exception("Not your vault to delete!");
      }
      string message = _vaultKeepsService.DestroyVaultKeep(vaultKeepId, userInfo.Id);
      return Ok(message);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }
}