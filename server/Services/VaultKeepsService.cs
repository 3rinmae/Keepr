

namespace Keepr.Services;

public class VaultKeepsService
{
  private readonly VaultKeepsRepository _repository;

  public VaultKeepsService(VaultKeepsRepository repository)
  {
    _repository = repository;
  }

  internal VaultKeep CreateVaultKeep(VaultKeep vaultKeepData)
  {
    VaultKeep vaultKeep = _repository.CreateVaultKeep(vaultKeepData);
    return vaultKeep;
  }

  // internal List<VaultVaultKeep> GetVaultVaultKeepsByAccountId(string userId)
  // {
  //   List<VaultVaultKeep> vaultVaultKeeps = _repository.GetVaultVaultKeepsByAccountId(userId);
  //   return vaultVaultKeeps;
  // }
}