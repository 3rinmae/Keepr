

namespace Keepr.Services;

public class VaultsService
{
  private readonly VaultsRepository _repository;

  public VaultsService(VaultsRepository repository)
  {
    _repository = repository;
  }

  internal Vault CreateVault(Vault vaultData)
  {
    Vault vault = _repository.CreateVault(vaultData);
    return vault;
  }

  internal Vault GetVaultById(int vaultId, string userId)
  {
    Vault vault = _repository.GetVaultById(vaultId, userId);
    if (vault == null)
    {
      throw new Exception($"Invalid Id: {vaultId}");
    }
    if (vault.IsPrivate == true && vault.CreatorId != userId)
    {
      throw new Exception($"Invalid Id: {vaultId}");
    }
    return vault;
  }
}