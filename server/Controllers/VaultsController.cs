namespace Keepr.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VaultsController : ControllerBase
{
  private readonly Auth0Provider _auth0Provider;
  private readonly VaultsService _vaultsService;
  private readonly KeepsService _keepsService;

  public VaultsController(Auth0Provider auth0Provider, VaultsService vaultsService, KeepsService keepsService)
  {
    _auth0Provider = auth0Provider;
    _vaultsService = vaultsService;
    _keepsService = keepsService;
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

  [Authorize]
  [HttpPut("{vaultId}")]
  public async Task<ActionResult<Vault>> UpdateVault(int vaultId, [FromBody] Vault vaultData)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      Vault vault = _vaultsService.UpdateVault(vaultId, userInfo.Id, vaultData);
      return Ok(vault);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [Authorize]
  [HttpDelete("{vaultId}")]
  public async Task<ActionResult<string>> DestroyVault(int vaultId)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      string message = _vaultsService.DestroyVault(vaultId, userInfo.Id);
      return Ok(message);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }

  [HttpGet("{vaultId}/keeps")]
  public async Task<ActionResult<List<Keep>>> GetKeepsInVault(int vaultId)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      Vault vault = _vaultsService.GetVaultById(vaultId, userInfo?.Id);
      if (vault.IsPrivate == true && vault.CreatorId != userInfo?.Id)
      {
        throw new Exception("Not your vault to access");
      }
      List<VaultVaultKeep> vaultVaultKeeps = _keepsService.GetKeepsInVault(vaultId, userInfo?.Id);
      return Ok(vaultVaultKeeps);
    }
    catch (Exception exception)
    {
      return BadRequest(exception.Message);
    }
  }
}